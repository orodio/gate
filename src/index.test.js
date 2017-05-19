import gate from "./index"

describe('gate()', () => {
  const { isLocked, isUnlocked, lock, unlock } = gate()

  test("default state", () => {
    expect(isLocked()).toEqual(true)
    expect(isUnlocked()).toEqual(false)
  })

  test("unlock", () => {
    unlock()
    expect(isLocked()).toEqual(false)
    expect(isUnlocked()).toEqual(true)
  })

  test("lock", () => {
    lock()
    expect(isLocked()).toEqual(true)
    expect(isUnlocked()).toEqual(false)
  })
})

describe('gate(true)', () => {
  const { isLocked, isUnlocked, lock, unlock } = gate(true)

  test("default state", () => {
    expect(isLocked()).toEqual(true)
    expect(isUnlocked()).toEqual(false)
  })

  test("unlock", () => {
    unlock()
    expect(isLocked()).toEqual(false)
    expect(isUnlocked()).toEqual(true)
  })

  test("lock", () => {
    lock()
    expect(isLocked()).toEqual(true)
    expect(isUnlocked()).toEqual(false)
  })
})

describe('gate(false)', () => {
  const { isLocked, isUnlocked, lock, unlock } = gate(false)

  test("default state", () => {
    expect(isLocked()).toEqual(false)
    expect(isUnlocked()).toEqual(true)
  })

  test("lock", () => {
    lock()
    expect(isLocked()).toEqual(true)
    expect(isUnlocked()).toEqual(false)
  })

  test("unlock", () => {
    unlock()
    expect(isLocked()).toEqual(false)
    expect(isUnlocked()).toEqual(true)
  })
})
