import { useCallback, useRef, useState } from "react";

const useLongPress = (props: {
  onClick: () => void;
  onLongPress: (
    e:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.TouchEvent<HTMLButtonElement>,
  ) => void;
  onClear: () => void;
  options?: {
    shouldPreventDefault: boolean;
    delay: number;
    clearOnMouseLeave: boolean;
  };
}) => {
  const {
    onLongPress,
    onClick,
    onClear,
    options: { shouldPreventDefault, delay, clearOnMouseLeave } = {
      shouldPreventDefault: true,
      delay: 300,
      clearOnMouseLeave: false,
    },
  } = props;
  const [longPressTriggered, setLongPressTriggered] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout>>();
  const target = useRef<any>();

  const start = useCallback(
    (
      event:
        | React.MouseEvent<HTMLButtonElement, MouseEvent>
        | React.TouchEvent<HTMLButtonElement>,
    ) => {
      if (shouldPreventDefault && event.target) {
        event.target.addEventListener("touchend", preventDefault, {
          passive: false,
        });
        target.current = event.target;
      }
      timeout.current = setTimeout(() => {
        onLongPress(event);
        setLongPressTriggered(true);
      }, delay);
    },
    [onLongPress, delay, shouldPreventDefault],
  );

  const clear = useCallback(
    (
      event:
        | React.MouseEvent<HTMLButtonElement, MouseEvent>
        | React.TouchEvent<HTMLButtonElement>,
      shouldTriggerClick = true,
    ) => {
      timeout.current && clearTimeout(timeout.current);
      shouldTriggerClick && !longPressTriggered && onClick();

      onClear();

      setLongPressTriggered(false);
      if (shouldPreventDefault && target.current) {
        target.current.removeEventListener("touchend", preventDefault);
      }
    },

    [shouldPreventDefault, onClick, longPressTriggered],
  );

  return {
    onMouseDown: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
      start(e),
    onTouchStart: (e: React.TouchEvent<HTMLButtonElement>) => start(e),
    onMouseUp: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => clear(e),
    onMouseLeave: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
      clear(e, false),
    onTouchEnd: (e: React.TouchEvent<HTMLButtonElement>) => clear(e),
  };
};

const preventDefault = (event: Event) => {
  if (!("touches" in event)) return;

  const temp: any = event?.touches;

  if (temp?.length < 2 && event.preventDefault) {
    event.preventDefault();
  }
};

export default useLongPress;
