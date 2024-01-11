const SortedPlanets = (bodies, typeBody) => {
    // filtro de planetas enanos
    // console.log((bodies.bodies || []).filter((body) => body.bodyType === "Dwarf Planet"))
    // filtro de planetas
    // console.log(
    //     (bodies.bodies || []).filter((body) => body.englishName === "Mimas")
    // );

    switch (typeBody) {
        case "planet":
            return (bodies.bodies || [])
                .filter((body) => body.isPlanet === true)
                .sort((a, b) => a.semimajorAxis - b.semimajorAxis);

        case "sun":
            return (bodies.bodies || []).filter(
                (body) => body.englishName === "Sun"
            );
        default:
            return (bodies.bodies || []).filter(
                (body) => body.name === typeBody
            );
    }
};

export default SortedPlanets;
