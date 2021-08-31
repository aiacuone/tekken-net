import Grid from '@material-ui/core/Grid'
import ControlPanel from '../components/ControlPanel'
import CharacterDropdown from '../components/CharacterDropdown'
import tekkennetLogo from '../public/images/tekkennetLogo.svg'
import Image from 'next/image'
import styles from '../styles/ControlPanel.module.css'
import globalStyles from '../styles/Home.module.css'
import { cpSpacing } from '../utils/vars'
import { MovesTable } from '../components/Table'

export default function main({ state, setState }) {
  const { isSmallScreen } = state

  const TekkenetLogo = () => {
    return (
      <Image
        width="400"
        height="50"
        className={styles.tekkennet_logo}
        src={tekkennetLogo}></Image>
    )
  }

  return (
    <Grid
      spacing={cpSpacing}
      container
      alignItems="center"
      direction="column"
      style={{ padding: '10px' }}>
      <Grid item className={globalStyles.background}>
        <Image
          // alt="Mountains"
          src="/images/backgroundSVG.svg"
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

      <Grid
        item
        style={{ height: isSmallScreen ? '100px' : '180px' }}
        className={styles.control_panel}>
        <ControlPanel state={state} setState={setState} />
      </Grid>

      <Grid
        item
        style={{
          height: isSmallScreen && '80vh',
          maxHeight: isSmallScreen && '650px',
        }}>
        <MovesTable state={state} />
      </Grid>
    </Grid>
  )
}
