describe "TagsMixin", ->
  Class = null

  beforeEach ->
    Class = ->
    Class.mixin.apply Class, [ Tags ]

  it "has tags", ->
    expect(new Class().listTags()).toEqual([])

  it "adds a tag", ->
    object = new Class()
    object.addTag "tutsplus"
    expect(object.listTags()).toEqual(["tutsplus"])

  it "removes a tag", ->
    object = new Class()
    object.addTag "tutsplus"
    object.removeTag "tutsplus"
    expect(object.listTags()).toEqual([])
