import * as stylex from "@stylexjs/stylex"

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

function App() {
  return (
    <>
      <p {...stylex.props(styles.base)}>asdfadsfadf adsf adsf adsf asdf asdf</p>
    </>
  )
}

export default App
