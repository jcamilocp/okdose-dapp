import {getPrescription} from '../../utils';

const leishmaniasisMedicines = {
  nMetilGlucamine: {
    name: 'leishmaniasis.n_metil_glucamine.name',
    presentation: 'leishmaniasis.n_metil_glucamine.presentation',
    prescription: (blockchainInterface, params = {}) =>
      getPrescription(
        blockchainInterface,
        process.env.NMETIL_CONTRACT,
        process.env.CONTRACT_METHOD,
        params
      )
  },
  sodiumStibogluconate: {
    name: 'leishmaniasis.sodium_stibogluconate.name',
    presentation: 'leishmaniasis.sodium_stibogluconate.presentation',
    prescription: (blockchainInterface, params = {}) =>
      getPrescription(
        blockchainInterface,
        process.env.STIBOGLUCONATE_CONTRACT,
        process.env.CONTRACT_METHOD,
        params
      )
  },
  pentamidineIsethionate: {
    name: 'leishmaniasis.pentamidine_isethionate.name',
    presentation: 'leishmaniasis.pentamidine_isethionate.presentation',
    prescription: (blockchainInterface, params = {}) =>
      getPrescription(
        blockchainInterface,
        process.env.PENTAMIDINE_CONTRACT,
        process.env.CONTRACT_METHOD,
        params
      )
  },
  miltefosine: {
    name: 'leishmaniasis.miltefosine.name',
    presentation: 'leishmaniasis.miltefosine.presentation',
    prescription: (blockchainInterface, params = {}) =>
      getPrescription(
        blockchainInterface,
        process.env.MILTEFOSINE_CONTRACT,
        process.env.CONTRACT_METHOD,
        params
      )
  },
  amphotericinBliposomal: {
    name: 'leishmaniasis.amphotericin_b_liposomal.name',
    presentation: 'leishmaniasis.amphotericin_b_liposomal.presentation',
    prescription: (blockchainInterface, params = {}) =>
      getPrescription(
        blockchainInterface,
        process.env.AMPHOTERICINBLIPOSOMAL_CONTRACT,
        process.env.CONTRACT_METHOD,
        params
      )
  }
};

export {leishmaniasisMedicines};
