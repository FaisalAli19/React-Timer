const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');

const Countdown = require('Countdown');

describe("Countdown", () => {
    it("should exist", () => {
        expect(Countdown).toExist();
    });

    describe("handleSetCountdown", () => {
        it("should setState to started and Countdown", (done) => {
            var countdown = TestUtils.renderIntoDocument(<Countdown />);
            countdown.handleSetCountdown(10);

            expect(countdown.state.count).toBe(10);
            expect(countdown.state.countdownStatus).toBe("started");

            setTimeout(() => {
                expect(countdown.state.count).toBe(9);
                done();
            }, 1001);
        });

        it("should setState and Countdown shouldn't be negative", (done) => {
            var countdown = TestUtils.renderIntoDocument(<Countdown />);
            countdown.handleSetCountdown(2);

            setTimeout(() => {
                expect(countdown.state.count).toBe(0);
                done();
            }, 3001);
        });

        it("should pause countdown on paused status", () => {
            var countdown = TestUtils.renderIntoDocument(<Countdown />);
            countdown.handleSetCountdown(3);
            countdown.handleStatusChange("paused")

            setTimeout(() => {
                expect(countdown.state.count).toBe(3);
                expect(countdowm.state.countdownStatus).toBe("paused");
                done();
            }, 1001);
        });

        it("should stop countdown on stopped status", () => {
            var countdown = TestUtils.renderIntoDocument(<Countdown />);
            countdown.handleSetCountdown(3);
            countdown.handleStatusChange("stopped")

            setTimeout(() => {
                expect(countdown.state.count).toBe(0);
                expect(countdowm.state.countdownStatus).toBe("stopped");
                done();
            }, 1001);
        });
    });
});
