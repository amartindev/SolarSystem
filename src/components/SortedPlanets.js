const SortedPlanets = (bodies, typeBody) => {

    switch (typeBody) {
        case "planet":
            return (bodies.bodies || [])
                .filter((body) => body.isPlanet === true)
                .sort((a, b) => a.semimajorAxis - b.semimajorAxis);

        case "sun":
            return (bodies.bodies || []).filter(
                (body) => body.englishName === "Sun"
            );
        case "Dwarf Planet":
            return (bodies.bodies || []).filter(
                (body) => body.bodyType === "Dwarf Planet"
            );
        default:
            return (bodies.bodies || []).filter(
                (body) => body.name === typeBody
            );
    }
};

export default SortedPlanets;
