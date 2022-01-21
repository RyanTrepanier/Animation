class BobaFett {

    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./BobaFett.png"), 2.8, 0, 29, 108, 3, .08);

        this.x = 0;
        this.y = 0;
        this.speed = 125;
    };

    update() {
        this.x += this.speed * this.game.clockTick;
        if (this.x > 1024) this.x = 0;
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y)
    };
}