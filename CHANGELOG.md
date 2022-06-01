# CHANGELOG

## v2.0.0

Dependency and code refreshment, new component public API.

### Breaking Changes

- Migrated to ESM.
- Updated Vue and Prokrutchik major versions.
- Updated public API for the component config. For more info check out the [migration guide](https://github.com/bespoyasov/scroller/blob/master/CHANGELOG.md#v300) in Scroller repo.
- Replaced the `config` property by a set of inner properties: `scrollbar`, `navigation`, `align`, `onItemClick`.

### New Features

- TypeScript support.
- New `position` property:
  - Sets the initial position at the first render;
  - Updates the Scroller position at the next renders.
- New `duration` property:
  - Sets the initial animation duration at the first render;
  - Sets the position change animation duration at the next renders.
