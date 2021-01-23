import React from 'react'
import Calculator from './Calculator'

const Tariff = () => {
    return (
        <div class="bg-light mt-5 customHeight">
            <h2 class="pt-5 pb-2 w-75 d-flex justify-content-start mx-auto">Cennik</h2>
            <div class="px-5 py-1 w-75 mx-auto tariffTable">
                <table class="table">
                    <tr>
                        <th>Usługa</th>
                        <th>Cena netto za 1m²</th>
                    </tr>
                    <tr>
                        <td>Czyszczenie kostki brukowej</td>
                        <td>7 zł</td>
                    </tr>
                    <tr>
                        <td>Dwukrotna impregnacja kostki brukowej</td>
                        <td>11 zł</td>
                    </tr>
                    <tr>
                        <td>Czyszczenie elewacji</td>
                        <td>11 zł</td>
                    </tr>
                    <tr>
                        <td>Uzupełnianie piasku w szczelinach kostki brukowej</td>
                        <td>3 zł</td>
                    </tr>
                    <tr>
                        <td>Czyszczenie dachów</td>
                        <td>16 zł</td>
                    </tr>
                    <tr>
                        <td>Czyszczenie okien</td>
                        <td>17 zł</td>
                    </tr>
                    <tr>
                        <td>Czyszczenie samochodów</td>
                        <td>21 zł</td>
                    </tr>
                    <tr>
                        <td>Czyszczenie mebli ogrodowych</td>
                        <td>19 zł</td>
                    </tr>
                </table>
                <p>Podane ceny są cenami netto i należy doliczyć 23% Vat.

                    Na każde wykonane przez nas zlecenie wystawiamy fakturę Vat.<br />

                    Minimalna wartość zlecenia na terenie Trójmiasta i okolic 150 zł.

                    Dojazd 50zł opłaty początkowej. Każdy następny kilometr 0,5 zł.
                </p>
                <Calculator />
            </div>
        </div>
    )
}

export default Tariff