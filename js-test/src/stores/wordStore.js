import { observable, action, computed } from 'mobx';

class WordStore {
    words = [
        'Dinosaur',
        'Robot',
        'Building',
        'Computer'
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