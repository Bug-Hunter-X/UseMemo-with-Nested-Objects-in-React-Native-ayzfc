# React Native useMemo Hook with Nested Objects Bug

This repository demonstrates a subtle bug related to using the `useMemo` hook in React Native when dealing with nested objects. The issue arises because `useMemo` performs a shallow comparison, which might not detect changes within nested objects or arrays.

## The Bug
The `bug.js` file shows a component that uses `useMemo` to memoize an object containing nested objects.  Mutating a property within a nested object doesn't trigger a re-render, resulting in stale data in the UI.

## The Solution
The `bugSolution.js` file provides a fix. It addresses the issue by either using a new object with updated values or by implementing a deep comparison function for `useMemo`.