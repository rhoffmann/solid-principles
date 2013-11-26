describe "Liker", ->
  it "likes a post", (done) ->

    $('#sandbox').html("<div id='post'><button id='like'>1</button></div>")
    new Liker()

    expectation = ->
      expect($('#like').html()).toEqual("2")
      done()

    $('#like').click(expectation).click()
