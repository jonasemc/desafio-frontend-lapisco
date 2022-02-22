export const filterProfiles = (profiles, query) => {
    const result = profiles.filter((profile)=>{
        const nomeCompleto = profile.name.first + profile.name.last
        const resultado = nomeCompleto.includes(query)
        return resultado;
    })  
    return resultado;
} 