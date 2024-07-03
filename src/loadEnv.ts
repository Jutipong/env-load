function useEnv() {
    if (import.meta.env.DEV) {
        return import.meta.env as ImportMetaEnv
    }
    else {
        const result = {
            VITE_PORT: (window as any).env.VITE_PORT,
            VITE_APP_TITLE: (window as any).env.VITE_APP_TITLE,
        } as ImportMetaEnv

        return result
    }
}


export { useEnv }