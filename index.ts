/*

  ***************************************
  * @AUTHOR: Anibe Samuel               *
  * @CopyRight: 2024 Anibesam.com       *
  * @Date: 06-08-2024                   *
   **************************************
  

*/


interface StatesAndLgas {
  [state: string]: string[];
}


const statesAndLgas: StatesAndLgas = {
    'Abia': ['Aba North', 'Aba South', 'Isiala Ngwa North', 'Isiala Ngwa South', 'Isuikwuato', 'Obingwa', 'Ohafia', 'Osisioma', 'Ugwunagbo', 'Umuahia North', 'Umuahia South', 'Ukwuani'],
    'Adamawa': ['Demsa', 'Fufore', 'Ganye', 'Girei', 'Gombi', 'Jada', 'Madagali', 'Maiha', 'Mayo-Belwa', 'Mubi North', 'Mubi South', 'Numan', 'Shelleng', 'Song', 'Yola North', 'Yola South'],
    'Akwa Ibom': ['Abak', 'Eastern Obolo', 'Eket', 'Esit Eket', 'Essien Udim', 'Etim Ekpo', 'Etinan', 'Ibiono Ibom', 'Ibesikpo Asutan', 'Ika', 'Ikono', 'Ikot Abasi', 'Ikot Ekpene', 'Ini', 'Itu', 'Mbo', 'Mkpat Enin', 'Nsit Atai', 'Nsit Ibom', 'Nsit Ubium', 'Obot Akara', 'Oron', 'Oruk Anam', 'Udung Uko', 'Uruan', 'Uyo'],
    'Anambra': ['Aguata', 'Akwa', 'Anaocha', 'Awka North', 'Awka South', 'Dunukofia', 'Ekwusigo', 'Idemili North', 'Idemili South', 'Ihiala', 'Njikoka', 'Nnewi North', 'Nnewi South', 'Ogbaru', 'Onitsha North', 'Onitsha South', 'Orumba North', 'Orumba South', 'Oyi'],
    'Bauchi': ['Alkaleri', 'Bauchi', 'Bogoro', 'Damban', 'Darazo', 'Dass', 'Gamawa', 'Ganjuwa', 'Giade', 'Jama’are', 'Katagum', 'Misau', 'Ningi', 'Shira', 'Tafawa Balewa', 'Toro', 'Warji', 'Zaki'],
    'Bayelsa': ['Brass', 'Ekeremor', 'Kolokuma/Opokuma', 'Nembe', 'Ogbia', 'Sagbama', 'Southern Ijaw', 'Yenagoa'],
    'Benue': ['Ado', 'Agatu', 'Apa', 'Buruku', 'Gboko', 'Guma', 'Gwer East', 'Gwer West', 'Katsina-Ala', 'Konshisha', 'Logo', 'Makurdi', 'Ogbadibo', 'Ohimini', 'Oju', 'Okpokwu', 'Orokam', 'Tarka', 'Ukum', 'Ushongo'],
    'Borno': ['Bama', 'Bayo', 'Biu', 'Chibok', 'Damboa', 'Dikwa', 'Gubio', 'Guzamala', 'Gwoza', 'Jere', 'Kaga', 'Konduga', 'Kukawa', 'Maiduguri', 'Marte', 'Monguno', 'Ngala', 'Nganzai', 'Shani'],
    'Cross River': ['Abi', 'Akamkpa', 'Akpabuyo', 'Bakassi', 'Bekwarra', 'Boki', 'Calabar Municipal', 'Calabar South', 'Etung', 'Ikom', 'Obubra', 'Obudu', 'Ogoja', 'Yala'],
    'Delta': ['Aniocha North', 'Aniocha South', 'Bomadi', 'Burutu', 'Ethiope East', 'Ethiope West', 'Ika North East', 'Ika South', 'Isoko North', 'Isoko South', 'Ndokwa East', 'Ndokwa West', 'Okpe', 'Oshimili North', 'Oshimili South', 'Patani', 'Sapele', 'Udu', 'Ugbelle', 'Ukwuani', 'Ukwuani'],
    'Ebonyi': ['Abakaliki', 'Afikpo North', 'Afikpo South', 'Ebonyi', 'Ezza North', 'Ezza South', 'Ikwo', 'Ishielu', 'Ivo', 'Ohaozara', 'Onicha'],
    'Edo': ['Akoko-Edo', 'Egor', 'Esan Central', 'Esan North-East', 'Esan South-East', 'Esan West', 'Etsako Central', 'Etsako East', 'Etsako West', 'Oredo', 'Ovia North-East', 'Ovia South-West', 'Uhunmwonde'],
    'Ekiti': ['Ado Ekiti', 'Ikere Ekiti', 'Ise/Orun', 'Oye Ekiti', 'Ekiti West', 'Ekiti South-West', 'Ekiti South-East', 'Ekiti North', 'Ikole Ekiti'],
    'Enugu': ['Enugu East', 'Enugu North', 'Enugu South', 'Ezeagu', 'Igbo-Etiti', 'Igbo-Eze North', 'Igbo-Eze South', 'Isi-Uzo', 'Nkanu East', 'Nkanu West', 'Nsukka', 'Udenu', 'Udi', 'Uzo-Uwani'],
    'FCT': ['Abaji', 'Abuja Municipal', 'Bwari', 'Gwagwalada', 'Kuje', 'Kwali'],
    'Gombe': ['Akko', 'Balanga', 'Billiri', 'Dukku', 'Funakaye', 'Gombe', 'Kaltungo', 'Kwami', 'Nafada', 'Shongom', 'Yamaltu/Deba'],
    'Imo': ['Aboh Mbaise', 'Ahiazu Mbaise', 'Ehime Mbano', 'Ezinihitte', 'Ideato North', 'Ideato South', 'Ihitte/Uboma', 'Ikeduru', 'Ikpator', 'Isiala Mbano', 'Isu', 'Mbaitoli', 'Ngor Okpala', 'Njaba', 'Nkwerre', 'Nwangele', 'Nwodo', 'Oguta', 'Ohaji/Egbema', 'Orlu', 'Orsu', 'Oru East', 'Oru West', 'Umuahia North', 'Umuahia South'],
    'Jigawa': ['Birnin Kudu', 'Dutse', 'Gagarawa', 'Garki', 'Gumel', 'Guri', 'Gwaram', 'Gwiwa', 'Hadejia', 'Jahun', 'Kafin Hausa', 'Kaugama', 'Kazaure', 'Kirikasamma', 'Kiyawa', 'Maigatari', 'Miga', 'Ringim', 'Roni', 'Sule Tankarkar', 'Taura', 'Yankwashi'],
    'Kaduna': ['Birnin Gwari', 'Chikun', 'Giwa', 'Igabi', 'Ikara', 'Jaba', 'Jema’a', 'Kachia', 'Kaduna North', 'Kaduna South', 'Kagarko', 'Kajuru', 'Kano', 'Kaura', 'Kauru', 'Kubau', 'Kudan', 'Lere', 'Makoda', 'Soba', 'Zangon Kataf'],
    'Kano': ['Ajingi', 'Albasu', 'Bagwai', 'Bebeji', 'Bichi', 'Bunkure', 'Dala', 'Dambatta', 'Dawakin Kudu', 'Dawakin Tofa', 'Doguwa', 'Fagge', 'Gabasawa', 'Garko', 'Garun Mallam', 'Gaya', 'Gezawa', 'Gwarzo', 'Kano', 'Karaye', 'Kibiya', 'Kiru', 'Kumbotso', 'Kunchi', 'Kura', 'Madobi', 'Makoda', 'Minjibir', 'Nasarawa', 'Rimin Gado', 'Rogo', 'Sumaila', 'Tudun Wada', 'Wudil'],
    'Katsina': ['Batagarawa', 'Batsari', 'Baure', 'Bindawa', 'Charanchi', 'Dandume', 'Danja', 'Dutsi', 'Dutsin-Ma', 'Funtua', 'Jibia', 'Kaita', 'Kankara', 'Kankia', 'Katsina', 'Katsina', 'Kibiri', 'Kofar Soro', 'Kurfi', 'Kusada', 'Mai’adua', 'Malumfashi', 'Mani', 'Mashi', 'Matazu', 'Musawa', 'Rimi', 'Sabuwa', 'Safana', 'Sandamu', 'Zango'],
    'Kebbi': ['Aleiro', 'Arewa', 'Argungu', 'Augie', 'Bagudo', 'Birnin Kebbi', 'Dandi', 'Gwandu', 'Jega', 'Koko-Besse', 'Maiyama', 'Ngaski', 'Sakaba', 'Shanga', 'Suru', 'Wasagu/Danko', 'Yauri'],
    'Kogi' : ['Adavi', 'Ajaokuta', 'Ankpa', 'Bassa', 'Dekina', 'Ibaji', 'Idah', 'Igalamela Odolu', 'Ijumu', 'Kogi', 'Mopamuro', 'Ofu', 'Ogori/Mangongo', 'Okehi', 'Okene', 'Olamaboro', 'Omala', 'Yagba East', 'Yagba West'],
    'Kwara': ['Asa', 'Baruten', 'Ekiti', 'Ifelodun', 'Ifelodu', 'Ilorin East', 'Ilorin South', 'Ilorin West', 'Irepodun', 'Irepodun', 'Isin', 'Kaiama', 'Moro', 'Offa', 'Oke-Ero', 'Oyun', 'Pategi'],
    'Lagos': ['Agege', 'Ajeromi-Ifelodun', 'Alimosho', 'Amuwo-Odofin', 'Apapa', 'Badagry', 'Epe', 'Eti-Osa', 'Ikeja', 'Ikorodu', 'Lagos Island', 'Lagos Mainland', 'Mushin', 'Ojo', 'Oshodi-Isolo', 'Somolu', 'Surulere'],
    'Nasarawa': ['Akwanga', 'Doma', 'Keffi', 'Kokona', 'Nasarawa', 'Nasarawa-Eggon', 'Obi', 'Toto', 'Wamba'],
    'Niger': ['Agwara', 'Bida', 'Borgu', 'Bosso', 'Chanchaga', 'Edati', 'Gbara', 'Gbagyi', 'Gbako', 'Gwari', 'Katcha', 'Kobo', 'Lapai', 'Lambata', 'Magama', 'Mokwa', 'Muye', 'Panda', 'Rafi', 'Rijau', 'Shiroro', 'Suleja', 'Wushishi'],
    'Ogun': ['Abeokuta North', 'Abeokuta South', 'Ado-Odo/Ota', 'Ewekoro', 'Ifo', 'Ijebu East', 'Ijebu North', 'Ijebu North East', 'Ijebu Ode', 'Ikenne', 'Imeko-Afon', 'Ipokia', 'Obafemi Owode', 'Ogun Waterside', 'Remo North', 'Remo South', 'Yewa North', 'Yewa South'],
    'Ondo': ['Akoko North-East', 'Akoko North-West', 'Akoko South-East', 'Akoko South-West', 'Akure North', 'Akure South', 'Ese-Odo', 'Idanre', 'Ifedore', 'Ileoluji/Okeigbo', 'Irele', 'Odigbo', 'Okitipupa', 'Ondo East', 'Ondo West', 'Ose', 'Owo'],
    'Osun': ['Atakunmosa East', 'Atakunmosa West', 'Ayedire', 'Ayedaade', 'Ayetoro', 'Boluwaduro', 'Boluwaduro', 'Boruja', 'Ede North', 'Ede South', 'Egbedore', 'Ejigbo', 'Ifedayo', 'Ifelodun', 'Ife East', 'Ife North', 'Ife South', 'Ilesa East', 'Ilesa West', 'Ilesa', 'Ilesa West', 'Ilesa East', 'Irepodun', 'Irepodun', 'Isokan', 'Iwo', 'Odo Otin', 'Osogbo', 'Orolu'],
    'Oyo': ['Akinyele', 'Atiba', 'Atisbo', 'Egbeda', 'Ibadan North', 'Ibadan North-East', 'Ibadan North-West', 'Ibadan South-East', 'Ibadan South-West', 'Ibarapa Central', 'Ibarapa East', 'Ibarapa North', 'Ido', 'Ilesa East', 'Ilesa West', 'Irewole', 'Isokan', 'Ogbomosho North', 'Ogbomosho South', 'Ogo Oluwa', 'Olorunda', 'Ona-Ara', 'Saki East', 'Saki West'],
    'Plateau': ['Barkin Ladi', 'Bassa', 'Bokkos', 'Jos East', 'Jos North', 'Jos South', 'Kanam', 'Kanke', 'Langtang North', 'Langtang South', 'Mangu', 'Pankshin', 'Quan’Pan', 'Riyom', 'Wase'],
    'Rivers': ['Abua/Odual', 'Ahoada East', 'Ahoada West', 'Akuku-Toru', 'Andoni', 'Asari-Toru', 'Bonny', 'Degema', 'Emohua', 'Etche', 'Ikwerre', 'Khana', 'Obio/Akpor', 'Ogba/Egbema/Ndoni', 'Ogu/Bolo', 'Okrika', 'Omuma', 'Opobo/Nkoro', 'Port Harcourt', 'Tai'],
    'Sokoto': ['Bodinga', 'Dange Shuni', 'Gada', 'Goronyo', 'Gudu', 'Illela', 'Kebbe', 'Rabah', 'Sabon Birni', 'Shagari', 'Silame', 'Sokoto North', 'Sokoto South', 'Wamakko', 'Wurno', 'Yabo'],
    'Taraba': ['Ardo Kola', 'Bali', 'Donga', 'Gashaka', 'Gassol', 'Gassol', 'Ibi', 'Jalingo', 'Kumi', 'Kurmi', 'Lau', 'Niger', 'Takum', 'Ussa', 'Wukari', 'Yorro'],
    'Yobe': ['Bade', 'Bursari', 'Damaturu', 'Fika', 'Fune', 'Geidam', 'Gujba', 'Gulani', 'Jakusko', 'Karasuwa', 'Nangere', 'Nguru', 'Potiskum', 'Tarmuwa', 'Yunusari', 'Yusufari'],
    'Zamfara': ['Anka', 'Bakura', 'Birnin Magaji', 'Bukkuyum', 'Bungudu', 'Gummi', 'Gusau', 'Kaura Namoda', 'Maradun', 'Maru', 'Shinkafi', 'Talata Mafara', 'Zumi']
  };


export const getStates = (): string[] => Object.keys(statesAndLgas);

export const getLgas = (state: string): string[] => statesAndLgas[state] || [];
