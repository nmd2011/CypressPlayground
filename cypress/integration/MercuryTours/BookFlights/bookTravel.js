const numberPassengers = 'select[name="passCount"]'
const fromPort = 'select[name="fromPort"]'
const departMonth = 'select[name="fromMonth"]'
const departDay = 'select[name="fromDay"]'

const toPort  = 'select[name="toPort"]'
const returnMonth = 'select[name="toMonth"]'
const returnday = 'select[name="toDay"]'
const findFlight = 'input[name="findFlights"]'

class bookFlight {

    static selectNumberPassengers(countPassengers) {
        cy.get(numberPassengers).select(countPassengers);
    }

    static selectFromPort(fPort) {
        cy.get(fromPort).select(fPort);
    }

    static selectDepartMonth(fromMonth) {
        cy.get(departMonth).select(fromMonth);
    }

    static selectDepartDay(fromDay) {
        cy.get(departDay).select(fromDay);
    }

    static selectToPort(tPort) {
        cy.get(toPort).select(tPort);
    }

    static selectReturnMonth(rMonth) {
        cy.get(returnMonth).select(rMonth);
    }

    static selectReturnDay(rDay) {
        cy.get(returnday).select(rDay);
    }

    static clickFindFlights() {
        cy.get(findFlight).click();
    }

}

export default bookFlight

