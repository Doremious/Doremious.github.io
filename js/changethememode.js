const handleThmChange = mode => {
    const globalFn = window.globalFn || {}
    const themeChange = globalFn.themeChange || {}
    if (!themeChange) {
        return
    }

    Object.keys(themeChange).forEach(key => {
        const themeChangeFn = themeChange[key]
        if (['disqus', 'disqusjs'].includes(key)) {
            setTimeout(() => themeChangeFn(mode), 300)
        } else {
            themeChangeFn(mode)
        }
    })
}

function changethememode() { // switch between light and dark mode
    const willChangeMode = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
    if (willChangeMode === 'dark') {
        activateDarkMode()
        GLOBAL_CONFIG.Snackbar !== undefined && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)
    } else {
        activateLightMode()
        GLOBAL_CONFIG.Snackbar !== undefined && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)
    }
    saveToLocal.set('theme', willChangeMode, 2)
    handleThmChange(willChangeMode)
}

const handleScrollToTop = () => {
    btf.scrollToDest(0, 300)
}