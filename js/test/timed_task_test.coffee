describe "TimedTask", ->
  it "has a title", ->
    expect(new TimedTask(title : "My First Task").title).toEqual("My First Task")

  it "has a starting time", ->
    expect(new TimedTask().startingDate).toBeGreaterThan(123456)