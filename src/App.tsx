import { Container, FormControlLabel, Switch } from '@material-ui/core'
import { useState } from 'react'
import { TwitterShareButton } from 'react-twitter-embed'
import RateGraph from './components/RateGraph'
import { invertDatapoints, WIN_RATE } from './winrate'

function App() {
  const [inverted, setInverted] = useState(false)
  const [datapoints, setDatapoints] = useState(WIN_RATE)
  const invertedDatapoints = invertDatapoints(WIN_RATE)

  return (
    <div>
      <Container maxWidth="md">
        <h1>Baystars(2021) vs. Pearls(1958)</h1>
        <FormControlLabel
          control={
            <Switch
              color="primary"
              checked={inverted}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const checked = event.target.checked
                setInverted(checked)
                if (checked) {
                  setDatapoints(invertedDatapoints)
                } else {
                  setDatapoints(WIN_RATE)
                }
              }}
            />
          }
          label={'inverted mode'}
        />
        <p>横浜DeNAベイスターズ(2021), 近鉄パールス(1958), トンボユニオンズ(1955) の勝率を試合数ベースで比較します。</p>
        <p>2021-07-12追記: 勝率4割ほどになり、比較の必要性が薄れてきたので更新が遅くなります。</p>
        <TwitterShareButton url={'https://t-chov.github.io/db2021/'} />
        <RateGraph datapoints={datapoints} />
      </Container>
    </div>
  )
}

export default App
