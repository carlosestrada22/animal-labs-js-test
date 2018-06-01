import { observable, action, computed } from 'mobx';

class WordStore {
    words = [
        "arugola",
        "assenters",
        "atlee",
        "balatas",
        "basophilic",
        "bastinading",
        "begotten",
        "blameful",
        "bloodthirstiest",
        "bribeworthy",
        "burnoose",
        "calcaneonavicular",
        "cautionry",
        "cesure",
        "chimed",
        "classes",
        "commemorating",
        "cuchia",
        "decemviral",
        "decrepitness",
        "deloul",
        "doweled",
        "emeute",
        "excipule",
        "fractionizing",
        "galvanoplastically",
        "ganglionated",
        "gastrothecal",
        "gestalter",
        "gonidiferous",
        "gusle",
        "hairweaver",
        "hajji",
        "handmaid",
        "helminthosporium",
        "homecrofting",
        "immeasurably",
        "impregnant",
        "impunible",
        "infusedly",
        "initialed",
        "kahar",
        "kokum",
        "lactify",
        "lifen",
        "localistic",
        "manchild",
        "marrowed",
        "mennuet",
        "metachromatism",
        "mezuzah",
        "mishmi",
        "mothball",
        "nonaudibility",
        "nonemendation",
        "nonmilitarily",
        "oecist",
        "olfactories",
        "oppugner",
        "outpoll",
        "overfertility",
        "participatively",
        "pastils",
        "petrol",
        "polydomous",
        "polygalaceous",
        "porocephalus",
        "prissiest",
        "prodigy",
        "prussianization",
        "quantitied",
        "rancheros",
        "reargues",
        "reliability",
        "renopulmonary",
        "shakiest",
        "showerier",
        "sinuous",
        "speckled",
        "speedaway",
        "strawflower",
        "subcontraoctave",
        "sula",
        "swims",
        "tenfoldness",
        "tetraketone",
        "thoracoacromial",
        "tidecoach",
        "toxicology",
        "trespassory",
        "trochoids",
        "turkology",
        "unalerted",
        "unbarren",
        "unbutchered",
        "unexpiring",
        "unmangled",
        "unspiritedly",
        "unteeming",
        "vaccinee"
    ];

    getRndWord = () => {
        let newCurrentWord = this.words[Math.floor(Math.random() * this.words.length)];
        if (newCurrentWord === this.currentWord)
            return this.getRndWord();
        return newCurrentWord;
    }

    @observable currWord = this.words[0];

    @action setCurrentWord = () => {
        this.currWord = this.getRndWord();
    }

    @computed get currentWord() {
        return this.currWord;
    }
}

const Words = new WordStore();

export default Words;