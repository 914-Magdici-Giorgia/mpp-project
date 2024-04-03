class Mill{
    constructor(id, name, place, year, type){
        this.id = id;
        this.name = name;
        this.place = place;
        this.year = year;
        this.type = type;
    }
}

//make data in memory
let mills = [
    new Mill(1, "Forthampton Mill", "Forthampton", "1845", "Tower"),
    new Mill(2, "Splash Mill", "Wraysbury", "1996", "Smock"),
    new Mill(3, "The Kendalls", "Gillingham", "1895", "Titt iron wind engine"),
    new Mill(4, "Windmill Hill Mill", "Gateshead", "1898", "Post"),
    new Mill(5, "Borough Mill", "Gateshead", "1837", "Tower"),
    new Mill(6, "Whickham Mill", "Whickham", "1720", "Tower"),
    new Mill(7, "Cam Mills", "Dursley", "1901", "Titt iron wind engine"),
    new Mill(8, "Haigh Mill", "Haigh", "1845", "Tower"),
    new Mill(9, "Forest's Mill", "Lydiate", "1768", "Tower"),
    new Mill(10, "Chimney Mill", "Newcastle", "1793", "Smock")
];

const getAll = () => {
    return mills;
}

const get = (id) => {
    return mills.find((mill) => {
        return mill.id === id;
    });
}

const create = (newMill) => {
    const id = Math.floor(Math.random() * 1000000); // generate a random unique number
    const mill = new Mill(
        id,
        newMill.name,
        newMill.place,
        newMill.year,
        newMill.type
    );
    mills.push(mill);
    return mill;
};

const deleteMany = () => {
    mills = [];
};

const update = (id, updatedMill) => {
    const mill = mills.find((mill) => {
        return mill.id === id;
    });

    if (mill) {
        mill.name = updatedMill.name;
        mill.place = updatedMill.place;
        mill.year = updatedMill.year;
        mill.type = updatedMill.type;
    }

    return mill;
};

const deleteMill = (id) => {
    const initialLength = mills.length;
    mills = mills.filter((mill) => {
        return mill.id !== id;
    });
    return initialLength !== mills.length;
}

export default {
    getAll,
    get,
    create,
    update,
    deleteMill,
    deleteMany
};