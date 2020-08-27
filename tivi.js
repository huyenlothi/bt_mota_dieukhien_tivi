let Tivi = function (channel,volume,status) {
    this.channel = channel;
    this.volume = volume;
    this.status = status;

    this.changeChannel= function (number) {
        this.channel= number;
    };
    this.changeVolume = function (number) {
        this.volume= number;
    };
};