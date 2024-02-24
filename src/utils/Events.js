const events = new Map();

export default {
  $on(eventName, fn) {
    if (!events.get(eventName)) {
      events.set(eventName, []);
    }
    events.get(eventName).push(fn);
  },

  $off(eventName, fn) {
    if (!events.get(eventName)) return;
    events.delete(eventName);
  },

  $emit(eventName, data) {
    if (events.has(eventName)) {
      events.get(eventName).forEach((fn) => fn(data));
    }
  },
};
