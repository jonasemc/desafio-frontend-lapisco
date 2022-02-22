export const filterProfiles = (profiles, query) => {
    const result = profiles.filter((profile)=>{
        const nomeCompleto = profile.name.first + profile.name.last
        const resultado = nomeCompleto.toUpperCase().includes(query.toUpperCase())
        return resultado;
    })  
    return result;
} 