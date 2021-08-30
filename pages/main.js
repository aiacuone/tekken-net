import Grid from '@material-ui/core/Grid'
import ControlPanel from '../components/ControlPanel'
import CharacterDropdown from '../components/CharacterDropdown'
import tekkennetLogo from '../public/images/tekkennetLogo.svg'
import Image from 'next/image'
import { cpSpacing } from '../utils/vars'
import { MovesTable } from '../components/Table'

export default function main({ state, setState }) {
  const { isSmallScreen } = state

  const TekkenetLogo = () => {
    return <Image width="400" height="50" src={tekkennetLogo}></Image>
  }

  return (
    <Grid spacing={cpSpacing} container alignItems="center" direction="column">
      <Grid item>
        <Image
          alt="Mountains"
          src="/images/background3.jpg"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </Grid>
      {!isSmallScreen && (
        <Grid item>
          <Grid container justifyContent="center" alignItems="center">
            <Grid item>
              <CharacterDropdown state={state} setState={setState} />
            </Grid>
            <Grid item>
              <TekkenetLogo />
            </Grid>
          </Grid>
        </Grid>
      )}

      <Grid item>
        <ControlPanel state={state} setState={setState} />
      </Grid>

      <Grid item>
        <MovesTable state={state} />
      </Grid>
    </Grid>
  )
}
