describe "Promises", ->

  # fix this with: http://lostechies.com/derickbailey/2012/08/17/asynchronous-unit-tests-with-mocha-promises-and-winjs/
  # see: http://lostechies.com/derickbailey/2013/09/20/consistency-problems-with-apis-in-javascript-promise-libraries/
  # read: https://groups.google.com/forum/#!topic/jasmine-js/1Nw3olgCVI8

  # this will probably resolve in all cases
  it "is resolved (testing promises sucks)", (done) ->
    output = ""

    getJSON("/api/promised.json")
    .then(
        (data) ->
          output += "JSON got back!"
      , (errorData) ->
        expect(output).toEqual("JSON got back!", "** Promise failed **")
        done("** promise failed **")
      )
    .then ->
        expect(output).toEqual("JSON got back!")
        done()

