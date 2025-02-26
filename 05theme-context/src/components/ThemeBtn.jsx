import useTheme from '../Contexts/Theme'

function ThemeBtn() {

    const {theme, lightTheme, darkTheme} = useTheme();

    const onChangeToggle = (e) =>{
        const darkModeStatus = e.currentTarget.checked;
        if(darkModeStatus){
            darkTheme()
        } else{
            lightTheme()
        }
    }

  return (
    <div className="d-flex justify-content-center gap-2">
        <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="themeToggle" onChange={onChangeToggle} checked={theme === "dark"}/>
            <label htmlFor='themeToggle' className="form-check-label">{theme} theme</label>
        </div>
    </div>
  )
}

export default ThemeBtn
