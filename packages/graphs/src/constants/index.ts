export const stateColor = '#1890ff';
// 默认交互状态
export const defaultStateStyles = {
  hover: {
    stroke: stateColor,
    lineWidth: 2,
  },
};

// card 默认节点大小
export const defaultNodeSize = [120, 40];

// 默认节点样式
export const defaultNodeStyle = {
  stroke: '#40a9ff',
};

// 默认 anchor 连接点
export const defaultFlowGraphAnchorPoints = [
  [0, 0.5],
  [1, 0.5],
];

// card body|footer  默认样式
export const defaultLabelStyle = {
  fill: '#000',
  fontSize: 12,
};
export const defaultLineLabelStyle = {
  fill: '#000',
  fontSize: 12,
  textAlign: 'start',
  textBaseline: 'middle',
};
// 缩略图默认配置
export const defaultMinimapCfg = {
  show: false,
  size: [150, 100],
  type: 'keyShape',
};

// card 默认样式
export const defaultCardStyle = {
  fill: '#fff',
  stroke: '#40a9ff',
  radius: 2,
};

// card 内部 padding | margin | 行间距
export const defaultMargin = 6;

// 打标前缀
export const prefix = 'g';

// status bar 的默认宽度
export const defaultStatusBarWidth = 4;

export const defaultToolbarStyle = {
  position: 'absolute',
  right: '12px',
  top: '12px',
  display: 'flex',
  flexDirection: 'column',
  padding: '6px',
  borderRadius: '2px',
  fontSize: '24px',
  textAlign: 'center',
  lineHeight: '24px',
  color: 'rgba(0,0,0,.65)',
  backgroundColor: '#fff',
  boxShadow: '0 0 3px #ccc',
} as React.CSSProperties;
