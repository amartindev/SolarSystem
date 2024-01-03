
const SortedPlanets = ( bodies ) => {
    const planetsFilter = (bodies.bodies || []).filter(
        (body) => body.isPlanet === true
    );
    const sortedPlanets = planetsFilter.sort(
        (a, b) => a.semimajorAxis - b.semimajorAxis
    );
    return sortedPlanets;
};

export default SortedPlanets;
