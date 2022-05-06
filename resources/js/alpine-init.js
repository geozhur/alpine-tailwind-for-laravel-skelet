const breakpoint = 768

const getThemeFromLocalStorage = (key) => {

    if (window.localStorage.getItem(key)) {
        return JSON.parse(window.localStorage.getItem(key))
    }

    return window.localStorage.getItem(key)
}

const setThemeToLocalStorage = (key, value) => {
    window.localStorage.setItem(key, value)
}

const getNavMenuOpen = () => {
    if(window.innerWidth > breakpoint)
        return getThemeFromLocalStorage('isNavMenuOpen') === null || getThemeFromLocalStorage('isNavMenuOpen')
    else
        return false
}

export default () => ({
    isAboveBreakpoint: window.innerWidth > breakpoint,

    handleResize() {
        this.isAboveBreakpoint = window.innerWidth > breakpoint

        if (window.innerWidth > breakpoint) {
            this.isNavMenuOpen = getThemeFromLocalStorage('isNavMenuOpen')
        } else {
            this.isNavMenuOpen = window.innerWidth > breakpoint
        }

    },
    dark: getThemeFromLocalStorage(),
    toggleTheme() {
        this.dark = !this.dark
        setThemeToLocalStorage(this.dark)
    },
    isNavMenuOpen: getNavMenuOpen(),
    toggleNavMenu() {
        this.isNavMenuOpen = !this.isNavMenuOpen
        if (window.innerWidth > breakpoint) {
            setThemeToLocalStorage('isNavMenuOpen', this.isNavMenuOpen)
        }
    },
    closeNavMenu() {
        this.isNavMenuOpen = false
    },
    isNotificationsMenuOpen: false,
    toggleNotificationsMenu() {
        this.isNotificationsMenuOpen = !this.isNotificationsMenuOpen
    },
    closeNotificationsMenu() {
        this.isNotificationsMenuOpen = false
    },
    isProfileMenuOpen: false,
    toggleProfileMenu() {
        this.isProfileMenuOpen = !this.isProfileMenuOpen
    },
    closeProfileMenu() {
        this.isProfileMenuOpen = false
    },
    isPagesMenuOpen: false,
    togglePagesMenu() {
        this.isPagesMenuOpen = !this.isPagesMenuOpen
    },
    // Modal
    isModalOpen: false,
    trapCleanup: null,
    openModal() {
        this.isModalOpen = true
        this.trapCleanup = focusTrap(document.querySelector('#modal'))
    },
    closeModal() {
        this.isModalOpen = false
        this.trapCleanup()
    }
})

