import "babel-polyfill"

export default (locked = true) => ({
  isLocked   () { return locked },
  isUnlocked () { return !locked },
  lock       () { locked = true },
  unlock     () { locked = false },
})
