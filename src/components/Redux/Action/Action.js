export const add = (data) => {
    return {
        type: "ADD",
        payload: {
            id: Math.floor(Math.random() * 10000),
            data: data,
        },
    };
};

export const remove = (id) => {
    return {
        type: "REMOVE",
        id
    };
};
