
export const generarId = () => {
    const random = Math.random().toString(36).substr(2)
    const fecha = Date.now().toString(36)

    return random + fecha
}

export const formatearFecha = fecha => {
    const fechaNueva = new Date (fecha);
    const opciones = {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
    }

    return fechaNueva.toLocaleDateString('es-Es', opciones)
}



<script type='text/javascript'>
    let siglas =[
        'FMI',
        'BID',
        ['ONU', 'UNESCO'],
        'BIRF'
    ]
    console.log(siglas[2], [1])
</script>
