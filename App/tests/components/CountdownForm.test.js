const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');

//Component
var CountdownForm = require("CountdownForm");

describe("CountdownForm", () => {
    it("should exist", () => {
        expect(CountdownForm).toExist();
    });

    it("should call onSetCountdown if valid second entered", () => {
        var spy = expect.createSpy();
        var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
        var $el = $(ReactDOM.findDOMNode(countdownForm));

        countdownForm.refs.seconds.value = "109";
        TestUtils.Simulate.submit($el.find("form")[0]);

        expect(spy).toHaveBeenCalledWith(109);
    });

    it("should not call onSetCountdown if invalid second entered", () => {
        var spy = expect.createSpy();
        var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
        var $el = $(ReactDOM.findDOMNode(countdownForm));

        countdownForm.refs.seconds.value = "109b";
        TestUtils.Simulate.submit($el.find("form")[0]);

        expect(spy).toNotHaveBeenCalled();
    });
});
