const tg = window.Telegram.WebApp;
export function useTelegram() {
    const tg = window.Telegram.WebApp;
    const onClose = () => {
        tg.close()
    }

    const onTogleButton = () => {
        if (tg.MainButton.isVisible)
        {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }
    return (
        tg,
        user: tg.initDateUnsafe?.user,
    )
}