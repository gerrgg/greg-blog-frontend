// notificationBus.js
const subscribers = new Set();

export function notify(notification) {
  subscribers.forEach(fn => fn(notification));
}

export function subscribe(fn) {
  subscribers.add(fn);
  return () => subscribers.delete(fn);
}
