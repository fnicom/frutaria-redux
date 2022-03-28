

const actions = {
    adicionar: fruta => ({
        type: 'ADICIOANAR_FRUTA',
        payload: fruta
    }),
    remover: fruta => ({
        type: 'REMOVER_FRUTA',
        payload: fruta,
    }),
};

export { actions };