import * as React from 'react';
import { Button as BaseButton } from '@mui/base/Button';
import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  base: {
    fontSize: 20,
    lineHeight: 1.5,
    color: "#99aaff",
  },
  highlighted: {
    color: "rebeccapurple",
  },
})

export default function Button() {
  return <BaseButton {...stylex.props(styles.base)}>Click Me</BaseButton>;
}
