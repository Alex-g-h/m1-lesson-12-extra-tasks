const attacker = {
  archer: 30,
  footSoldier: 55,
  cavalry: 10,
  artillery: 3,

  checkChancesToWin(defenderObject) {
    let militaryCount = 0;
    let winChance = 0;
    Object.entries(defenderObject).forEach(([military, volume]) => {
      if (typeof defenderObject[military] !== 'function') {
        militaryCount++;
        winChance += Number(this[military] > volume);
      }
    })
    return [winChance, militaryCount];
  },

  improveArmy() {
    Object.keys(this).forEach(military => {
      if (typeof this[military] !== 'function')
        this[military] += 5;
    })
  },

  attack(defenderObject) {
    [winChance, militaryCount] = this.checkChancesToWin(defenderObject);
    if (militaryCount === 0) {
      alert('Враг не определен.');
      return;
    }

    const winChanceInPercent = Math.floor((winChance / militaryCount) * 100);
    if (winChanceInPercent < 70) {
      alert(`Наши шансы равны ${winChance} / ${militaryCount} (${winChanceInPercent} %). Необходимо укрепление!`);
      this.improveArmy();
    }
    else {
      alert('Мы усилились! Мы несомненно победим! Наши шансы высоки!');
    }

  }
};

const defender = {
  archer: 33,
  footSoldier: 50,
  cavalry: 40,
  artillery: 10
};



attacker.attack(defender); // Наши шансы равны 1/4. Необходимо укрепление! 
attacker.attack(defender); // Наши шансы равны 2/4. Необходимо укрепление! 
attacker.attack(defender); // Мы усилились! Мы несомненно победим! Наши шансы высоки!