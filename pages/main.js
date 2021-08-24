import Grid from "@material-ui/core/Grid";
import ControlPanel from "../components/ControlPanel";
import CharacterDropdown from "../components/CharacterDropdown";
import tekkennetLogo from "../public/images/tekkennetLogo.svg";
import Image from "next/image";
import styles from "../styles/ControlPanel.module.css";
import globalStyles from "../styles/Home.module.css";

export default function main({ state, setState, vars }) {
  const { characterDropdownValue } = state;
  const { setCharacterDropdownValue } = setState;
  const { isSmallScreen, charactersArr, CPSpacing } = vars;

  const TekkenetLogo = () => {
    return (
      <Image
        width="400"
        height="50"
        className={styles.tekkennet_logo}
        src={tekkennetLogo}
      ></Image>
    );
  };

  return (
    <Grid
      spacing={CPSpacing}
      container
      alignItems="center"
      direction="column"
      style={{ padding: "10px" }}
    >
      <Grid item className={globalStyles.background}>
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
              <CharacterDropdown
                state={state}
                vars={vars}
                setState={setState}
              />
            </Grid>
            <Grid item>
              <TekkenetLogo />
            </Grid>
          </Grid>
        </Grid>
      )}

      <Grid item>
        <ControlPanel state={state} setState={setState} vars={vars} />
      </Grid>
    </Grid>
  );
}
