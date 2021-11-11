import { Box } from '@components/';
import { useAppTheme } from '@components/makeStyles';
import * as React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

const TravelDetail = ({ updatePassengerDetail, passengerItem }) => {
    const [coutries, setCountries] = React.useState([
        { value: "Afghanistan", label: "Afghanistan" },
        { value: "Albania", label: "Albania" },
        { value: "Algeria", label: "Algeria" },
        { value: "Andorra", label: "Andorra" },
        { value: "Angola", label: "Angola" },
        { value: "Anguilla", label: "Anguilla" },
        { value: "Antarctica/British Antarctic Territory", label: "Antarctica/British Antarctic Territory" },
        { value: "Antigua and Barbuda", label: "Antigua and Barbuda" },
        { value: "Argentina", label: "Argentina" },
        { value: "Armenia", label: "Armenia" },
        { value: "Aruba", label: "Aruba" },
        { value: "Australia", label: "Australia" },
        { value: "Austria", label: "Austria" },
        { value: "Azerbaijan", label: "Azerbaijan" },
        { value: "Bahamas", label: "Bahamas" },
        { value: "Bahrain", label: "Bahrain" },
        { value: "Balearic Islands (Formentera, Ibiza, Mallorca, Menorca)", label: "Balearic Islands (Formentera, Ibiza, Mallorca, Menorca)" },
        { value: "Bangladesh", label: "Bangladesh" },
        { value: "Barbados", label: "Barbados" },
        { value: "Belarus", label: "Belarus" },
        { value: "Belgium", label: "Belgium" },
        { value: "Belize", label: "Belize" },
        { value: "Benin", label: "Benin" },
        { value: "Bermuda", label: "Bermuda" },
        { value: "Bhutan", label: "Bhutan" },
        { value: "Bolivia", label: "Bolivia" },
        { value: "Bonaire/St Eustatius/Saba", label: "Bonaire/St Eustatius/Saba" },
        { value: "Bosnia and Herzegovina", label: "Bosnia and Herzegovina" },
        { value: "Botswana", label: "Botswana" },
        { value: "Brazil", label: "Brazil" },
        { value: "British Indian Ocean Territory", label: "British Indian Ocean Territory" },
        { value: "British Virgin Islands", label: "British Virgin Islands" },
        { value: "Brunei", label: "Brunei" },
        { value: "Bulgaria", label: "Bulgaria" },
        { value: "Burkina Faso", label: "Burkina Faso" },
        { value: "Burundi", label: "Burundi" },
        { value: "Cambodia", label: "Cambodia" },
        { value: "Cameroon", label: "Cameroon" },
        { value: "Canada", label: "Canada" },
        { value: "Cape Verde", label: "Cape Verde" },
        { value: "Cayman Islands", label: "Cayman Islands" },
        { value: "Central African Republic", label: "Central African Republic" },
        { value: "Chad", label: "Chad" },
        { value: "Chile", label: "Chile" },
        { value: "China", label: "China" },
        { value: "Colombia", label: "Colombia" },
        { value: "Comoros", label: "Comoros" },
        { value: "Congo", label: "Congo" },
        { value: "Cook Islands, Tokelau and Niue", label: "Cook Islands, Tokelau and Niue" },
        { value: "Costa Rica", label: "Costa Rica" },
        { value: "Côte d'Ivoire", label: "Côte d'Ivoire" },
        { value: "Croatia", label: "Croatia" },
        { value: "Cuba", label: "Cuba" },
        { value: "Curaçao", label: "Curaçao" },
        { value: "Cyprus", label: "Cyprus" },
        { value: "Czech Republic", label: "Czech Republic" },
        { value: "Democratic Republic of the Congo", label: "Democratic Republic of the Congo" },
        { value: "Denmark", label: "Denmark" },
        { value: "Djibouti", label: "Djibouti" },
        { value: "Dominica", label: "Dominica" },
        { value: "Dominican Republic", label: "Dominican Republic" },
        { value: "Ecuador", label: "Ecuador" },
        { value: "Egypt", label: "Egypt" },
        { value: "El Salvador", label: "El Salvador" },
        { value: "Equatorial Guinea", label: "Equatorial Guinea" },
        { value: "Eritrea", label: "Eritrea" },
        { value: "Estonia", label: "Estonia" },
        { value: "Eswatini", label: "Eswatini" },
        { value: "Ethiopia", label: "Ethiopia" },
        { value: "Falkland Islands", label: "Falkland Islands" },
        { value: "Fiji", label: "Fiji" },
        { value: "Finland", label: "Finland" },
        { value: "France", label: "France" },
        { value: "French Guiana", label: "French Guiana" },
        { value: "French Polynesia", label: "French Polynesia" },
        { value: "Gabon", label: "Gabon" },
        { value: "The Gambia", label: "The Gambia" },
        { value: "Georgia", label: "Georgia" },
        { value: "Germany", label: "Germany" },
        { value: "Ghana", label: "Ghana" },
        { value: "Gibraltar", label: "Gibraltar" },
        { value: "Greece", label: "Greece" },
        { value: "Grenada", label: "Grenada" },
        { value: "Guadeloupe", label: "Guadeloupe" },
        { value: "Guatemala", label: "Guatemala" },
        { value: "Guinea", label: "Guinea" },
        { value: "Guinea-Bissau", label: "Guinea-Bissau" },
        { value: "Guyana", label: "Guyana" },
        { value: "Haiti", label: "Haiti" },
        { value: "Honduras", label: "Honduras" },
        { value: "Hong Kong", label: "Hong Kong" },
        { value: "Hungary", label: "Hungary" },
        { value: "Iceland", label: "Iceland" },
        { value: "India", label: "India" },
        { value: "Indonesia", label: "Indonesia" },
        { value: "Iran", label: "Iran" },
        { value: "Iraq", label: "Iraq" },
        { value: "Ireland", label: "Ireland" },
        { value: "Israel", label: "Israel" },
        { value: "Italy", label: "Italy" },
        { value: "Jamaica", label: "Jamaica" },
        { value: "Japan", label: "Japan" },
        { value: "Jordan", label: "Jordan" },
        { value: "Kazakhstan", label: "Kazakhstan" },
        { value: "Kenya", label: "Kenya" },
        { value: "Kiribati", label: "Kiribati" },
        { value: "Kosovo", label: "Kosovo" },
        { value: "Kuwait", label: "Kuwait" },
        { value: "Kyrgyzstan", label: "Kyrgyzstan" },
        { value: "Laos", label: "Laos" },
        { value: "Latvia", label: "Latvia" },
        { value: "Lebanon", label: "Lebanon" },
        { value: "Lesotho", label: "Lesotho" },
        { value: "Liberia", label: "Liberia" },
        { value: "Libya", label: "Libya" },
        { value: "Liechtenstein", label: "Liechtenstein" },
        { value: "Lithuania", label: "Lithuania" },
        { value: "Luxembourg", label: "Luxembourg" },
        { value: "Macao", label: "Macao" },
        { value: "Madagascar", label: "Madagascar" },
        { value: "Madeira", label: "Madeira" },
        { value: "Malawi", label: "Malawi" },
        { value: "Malaysia", label: "Malaysia" },
        { value: "Maldives", label: "Maldives" },
        { value: "Mali", label: "Mali" },
        { value: "Malta", label: "Malta" },
        { value: "Marshall Islands", label: "Marshall Islands" },
        { value: "Martinique", label: "Martinique" },
        { value: "Mauritania", label: "Mauritania" },
        { value: "Mauritius", label: "Mauritius" },
        { value: "Mayotte", label: "Mayotte" },
        { value: "Mexico", label: "Mexico" },
        { value: "Micronesia", label: "Micronesia" },
        { value: "Moldova", label: "Moldova" },
        { value: "Monaco", label: "Monaco" },
        { value: "Mongolia", label: "Mongolia" },
        { value: "Montenegro", label: "Montenegro" },
        { value: "Montserrat", label: "Montserrat" },
        { value: "Morocco", label: "Morocco" },
        { value: "Mozambique", label: "Mozambique" },
        { value: "Myanmar (Burma)", label: "Myanmar (Burma)" },
        { value: "Namibia", label: "Namibia" },
        { value: "Nauru", label: "Nauru" },
        { value: "Nepal", label: "Nepal" },
        { value: "Netherlands", label: "Netherlands" },
        { value: "New Caledonia", label: "New Caledonia" },
        { value: "New Zealand", label: "New Zealand" },
        { value: "Nicaragua", label: "Nicaragua" },
        { value: "Niger", label: "Niger" },
        { value: "Nigeria", label: "Nigeria" },
        { value: "North Korea", label: "North Korea" },
        { value: "North Macedonia", label: "North Macedonia" },
        { value: "Norway", label: "Norway" },
        { value: "Oman", label: "Oman" },
        { value: "Pakistan", label: "Pakistan" },
        { value: "Palau", label: "Palau" },
        { value: "The Occupied Palestinian Territories", label: "The Occupied Palestinian Territories" },
        { value: "Panama", label: "Panama" },
        { value: "Papua New Guinea", label: "Papua New Guinea" },
        { value: "Paraguay", label: "Paraguay" },
        { value: "Peru", label: "Peru" },
        { value: "Philippines", label: "Philippines" },
        { value: "Pitcairn Island", label: "Pitcairn Island" },
        { value: "Poland", label: "Poland" },
        { value: "Portugal", label: "Portugal" },
        { value: "Qatar", label: "Qatar" },
        { value: "Réunion", label: "Réunion" },
        { value: "Romania", label: "Romania" },
        { value: "Russia", label: "Russia" },
        { value: "Rwanda", label: "Rwanda" },
        { value: "Samoa", label: "Samoa" },
        { value: "San Marino", label: "San Marino" },
        { value: "São Tomé and Principe", label: "São Tomé and Principe" },
        { value: "Saudi Arabia", label: "Saudi Arabia" },
        { value: "Senegal", label: "Senegal" },
        { value: "Serbia", label: "Serbia" },
        { value: "Seychelles", label: "Seychelles" },
        { value: "Sierra Leone", label: "Sierra Leone" },
        { value: "Singapore", label: "Singapore" },
        { value: "Slovakia", label: "Slovakia" },
        { value: "Slovenia", label: "Slovenia" },
        { value: "Solomon Islands", label: "Solomon Islands" },
        { value: "Somalia", label: "Somalia" },
        { value: "South Africa", label: "South Africa" },
        { value: "South Georgia and the South Sandwich Islands", label: "South Georgia and the South Sandwich Islands" },
        { value: "South Korea", label: "South Korea" },
        { value: "South Sudan", label: "South Sudan" },
        { value: "Spain", label: "Spain" },
        { value: "Sri Lanka", label: "Sri Lanka" },
        { value: "St Helena, Ascension and Tristan da Cunha", label: "St Helena, Ascension and Tristan da Cunha" },
        { value: "St Kitts and Nevis", label: "St Kitts and Nevis" },
        { value: "St Lucia", label: "St Lucia" },
        { value: "St Maarten", label: "St Maarten" },
        { value: "St Martin and St Barthélemy", label: "St Martin and St Barthélemy" },
        { value: "St Pierre &amp; Miquelon", label: "St Pierre &amp; Miquelon" },
        { value: "St Vincent and the Grenadines", label: "St Vincent and the Grenadines" },
        { value: "Sudan", label: "Sudan" },
        { value: "Suriname", label: "Suriname" },
        { value: "Sweden", label: "Sweden" },
        { value: "Switzerland", label: "Switzerland" },
        { value: "Syria", label: "Syria" },
        { value: "Taiwan", label: "Taiwan" },
        { value: "Tajikistan", label: "Tajikistan" },
        { value: "Tanzania", label: "Tanzania" },
        { value: "Thailand", label: "Thailand" },
        { value: "Timor-Leste", label: "Timor-Leste" },
        { value: "Togo", label: "Togo" },
        { value: "Tonga", label: "Tonga" },
        { value: "Trinidad and Tobago", label: "Trinidad and Tobago" },
        { value: "Tunisia", label: "Tunisia" },
        { value: "Turkey", label: "Turkey" },
        { value: "Turkmenistan", label: "Turkmenistan" },
        { value: "Turks and Caicos Islands", label: "Turks and Caicos Islands" },
        { value: "Tuvalu", label: "Tuvalu" },
        { value: "USA", label: "USA" },
        { value: "Uganda", label: "Uganda" },
        { value: "Ukraine", label: "Ukraine" },
        { value: "United Arab Emirates", label: "United Arab Emirates" },
        { value: "United Kingdom", label: "United Kingdom" },
        { value: "Uruguay", label: "Uruguay" },
        { value: "Uzbekistan", label: "Uzbekistan" },
        { value: "Vanuatu", label: "Vanuatu" },
        { value: "Venezuela", label: "Venezuela" },
        { value: "Vietnam", label: "Vietnam" },
        { value: "Wallis and Futuna", label: "Wallis and Futuna" },
        { value: "Western Sahara", label: "Western Sahara" },
        { value: "Yemen", label: "Yemen" },
        { value: "Zambia", label: "Zambia" },
        { value: "Zimbabwe", label: "Zimbabwe" }

    ]);
    const [arrivalCountryOpen, setArrivalCountryOpen] = React.useState(false);
    const [transitCountryOpen, setTransitCountryOpen] = React.useState(false);
    const [destinationOpen, setDestinationOpen] = React.useState(false);
    const theme = useAppTheme();
    return (
        <>
            <Box flex={1}>
                <DropDownPicker
                    open={arrivalCountryOpen}
                    value={passengerItem?.arrivalCountry}
                    items={coutries}
                    zIndex={3000}
                    zIndexInverse={1000}
                    listMode="SCROLLVIEW"
                    style={{
                        width: '91%',
                        height: 50,
                        marginVertical: theme.spacing.m,
                        backgroundColor: theme.colors.backgroundGrey,
                        alignSelf: 'center'
                    }}
                    placeholder="Travelling From *"
                    setOpen={setArrivalCountryOpen}
                    setValue={(value) => { updatePassengerDetail('arrivalCountry', value()); }}
                    setItems={setCountries}
                />
            </Box>
            <Box flex={1}>
                <DropDownPicker
                    open={transitCountryOpen}
                    value={passengerItem?.transitCountry}
                    items={coutries}
                    listMode="SCROLLVIEW"
                    zIndex={2000}
                    zIndexInverse={2000}
                    style={{
                        width: '91%',
                        height: 50,
                        marginVertical: theme.spacing.m,
                        backgroundColor: theme.colors.backgroundGrey,
                        alignSelf: 'center'
                    }}
                    placeholder="Transit Country"
                    setOpen={setTransitCountryOpen}
                    setValue={(value) => { updatePassengerDetail('transitCountry', value()); }}
                    setItems={setCountries}
                />
            </Box>
            <Box flex={1}>
                <DropDownPicker
                    open={destinationOpen}
                    value={passengerItem?.destination}
                    items={coutries}
                    listMode="SCROLLVIEW"
                    zIndex={1000}
                    zIndexInverse={3000}
                    placeholder="Destination Country"
                    style={{
                        width: '91%',
                        height: 50,
                        marginVertical: theme.spacing.m,
                        backgroundColor: theme.colors.backgroundGrey,
                        alignSelf: 'center'
                    }}
                    setOpen={setDestinationOpen}
                    setValue={(value) => { updatePassengerDetail('destination', value()); }}
                    setItems={setCountries}
                />
            </Box>
            <Box height={100} />
        </>
    );
};

export default TravelDetail;
