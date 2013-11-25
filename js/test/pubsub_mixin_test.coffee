describe "counting tags", ->

  Class = null

  beforeEach ->
    Class = ->
    Class.mixin.apply Class, [ Tags ]
    Class.mixin.apply Class, [ PubSub ]

  it "prints the tag count via pubsub for each tag added", ->
    object = new Class()
    output = ""

    object.subscribe "tagAdded", ->
      output = @countTags().toString()

    object.addTag("tutsplus")
    object.addTag("sometag")

    expect(output).toEqual("2")

  it "prints the tag count via pubsub for each tag removed", ->
    object = new Class()
    output = ""

    object.subscribe "tagRemoved", ->
      output = @countTags().toString()

    object.addTag("tutsplus")
    object.addTag("sometag")
    object.removeTag("sometag")

    expect(output).toEqual("1")

