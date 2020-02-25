function reverseArray(arr) {
    (Array.isArray(arr)) ? [...arr, ...[...arr].reverse()] : null;
  }