import * as React from 'react';

type MotionFunc = (element: HTMLElement) => React.CSSProperties;

interface Motion {
  visible?: boolean;
  motionName?: string; // It also support object, but we only use string here.
  motionAppear?: boolean;
  motionEnter?: boolean;
  motionLeave?: boolean;
  motionLeaveImmediately?: boolean; // Trigger leave motion immediately
  removeOnLeave?: boolean;
  leavedClassName?: string;
  onAppearStart?: MotionFunc;
  onAppearActive?: MotionFunc;
  onAppearEnd?: MotionFunc;
  onEnterStart?: MotionFunc;
  onEnterActive?: MotionFunc;
  onEnterEnd?: MotionFunc;
  onLeaveStart?: MotionFunc;
  onLeaveActive?: MotionFunc;
  onLeaveEnd?: MotionFunc;
}

// ================== Collapse Motion ==================
const getCollapsedHeight: MotionFunc = () => ({ height: 0 });
const getRealHeight: MotionFunc = node => ({ height: node.scrollHeight });
const getCurrentHeight: MotionFunc = node => ({ height: node.offsetHeight });

export const collapseMotion: Motion = {
  motionName: 'ant-motion-collapse',
  onAppearStart: getCollapsedHeight,
  onEnterStart: getCollapsedHeight,
  onAppearActive: getRealHeight,
  onEnterActive: getRealHeight,
  onLeaveStart: getCurrentHeight,
  onLeaveActive: getCollapsedHeight,
};
