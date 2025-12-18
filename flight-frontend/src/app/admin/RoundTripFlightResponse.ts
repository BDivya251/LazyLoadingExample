import { FlightWrapper } from "./flight-wrapper";

export interface RoundTripFlightResponse {
  going: FlightWrapper[];
  coming: FlightWrapper[];
}
