<template>
  <div class="c-about">
    <div class="about-top__wrap">
      <div class="about-top top-box content-box">
        <!-- <Drop /> -->
        <official-account />
      </div>
    </div>
    <div class="about-body content-box">
      <div class="about__title">
        <div class="h1">FOR YOU FROM CHINNA GUILIN. I TAKE YOU TO THE NEW WORLD WITH THE GORGEOUS VIEW.</div>

      </div>
      <div class="about__break">
      </div>
      <div class="row about__intro">
        <div class="col-xs-6 col-md-6 col-lg-6">
          In 2007, he has had been impressed in San Francisco where Fred Everything, Miguel Migs and Mark Farina were playing at OM Records. He was particularly impressed by House music with the
          west coast taste in the US, so after coming back to Japan, his DJ career has started in September of the same year.

          In October of the next year, he has launched a regular party at the WOMB SUNDAY AFTERNOON and was hustling at the party as both a resident DJ and a leader.

          Besides then in 2009, he went to Offenbach and Frankfurt, Germany ,and then he went to London, the UK. He was impressed by German House music and came in touch with inorganic and strong
          sounds of Deep house in the UK. These experiences made him to know how diverse dance musics are.

          After that,he started to show his real potential in a party ,Apt. International Presents "SEASONS", at the WAREHOUSE702 as one of the resident DJ member since June 2010. In october 2011,
          he has played at the FREAKS VILLAGE(Xland). Moreover, he has basically played in well known clubs in Tokyo such as AIR, WOMB, solfa, module and etc with both domestic and foreign artists.

          In 2012, he regularly started to join house music party "EUREKA!". EUREKA! collaborated with Reel People, The Layabouts, Jullian Gomes, Kyodai, Mad Mats(Local Talk Records), Kuniyuki
          Takahashi(a.k.a. Koss), Hideo Kobayashi(a.k.a. H.I.D) and etc. The theme of EUREKA! is "Quality House Music". At the same time, he regularly started to join the party "strobo". This party
          collaborated with Yoshinori Sunahara, Kuniyuki Takahashi, Daisuke Tanabe, Ryo Murakami, Jun Akimoto, Iori Wakasa, Den, Yosa and etc. And he has established Unite Music Production and
          released official lisence mix CD collaborating with Nick Curly, Fred Everything, Jimpster, Alix Alvarez, Milton Jackson, Mic Newman, Joel Alter, Mr.G, Steve Bug, W!ld, Subb-an, Junior Gee,
          Yoshitaca, Masanori Mikami, and his favirite label that Cecille, Lazy Days, Freerange, Sole Chanel, Fina, Bass Culture, Dessous, Rekids, Spectual Sound, Plastic City, Apt. International,
          Holic Trax, Fasten Musique and Outdraw.

          In 2013 October, he will release the first remix work of "Saru" original produced by Ume from Outdraw Music managed by Masanori Mikami and Synya in Kyoto, The other remixer is Kikiorix and
          Telly. The art work of remix is produced by Yugo Hasegawa from Souvenir Music.

          In 2014 August, he is scheduled to release "The Background EP" from the new label "Kizi Garden Records" based in Montreal, Canada. He will represented the essence of the artist-label genre
          that is the background of his house music that strongly influenced him in the EP.
        </div>
        <div class="col-xs-6 col-md-6 col-lg-6">
          2007年8月に赴いたサンフランシスコでアメリカ西海岸ならではのハウスミュージックに感銘を受け帰国し、同年9月よりDJとしてのキャリアをスタート。2008年10月にはWOMB SUNDAY AFTERNOONのレギュラーパーティを立ち上げ、主宰すると共にレジデントDJとして活動。その間 2009年にはドイツ フランクフルト、オッフェンバッハ、イギリス
          ロンドンに赴きヨーロッパならではのハウスミュージックに触れ、ダンスミュージックの多様性を感じ帰国。その後 2010年6月から約二年間、国内レーベル Apt. International 主催のSEASONSで約二年間レギュラーメンバーとして活動。その間 2011年にはFREAKS
          VILLAGEに出演。2012年にはDJのキャリアをスタートさせてから5年の節目としてFreerange、Dessous、Cécille、Rekids、Bass Culture、Lazy Days、Plastic City、Finaなどのレーベルと契約しUnite MusicからオフィシャルライセンスミックスCD
          ”One”をリリース。同時に国内アーティストとコラボレーションし日曜日の午後に開催されているstrobo、Quality House Musicをスローガンに海外の旬なアーティスト・レーベルとコラボレーションし独自のハウスグループを発信するEUREKA!のレジデントとして活動をスタート。2013年10月には京都を拠点とするレーベル"Outdraw Music"から"Ume
          / Saru (Kenji Endo Remix)"をリリース。2014年8月にはカナダ モントリオールを拠点とする新レーベル”Kizi Garden Records”から彼に強く影響を与え、彼のハウスミュージックのバックグラウンドとなっているアーティスト・レーベル・ジャンルのエッセンスを表現した”The Background EP”をリリースすることが決定している。
        </div>
      </div>

    </div>
    <!-- <h1>This is an about page</h1> -->
    <Footer />

  </div>
</template>
<script>
import Footer from '@/components/Footer'
import OfficialAccount from '@/components/OfficialAccount'
// import Drop from '@/components/Drop'
export default {
  components: { Footer, OfficialAccount }
}
</script>
<style scoped lang="scss">
.c-about {
  background: #000;
  /* border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.1); */
}
.about-top {
  height: 260px;
  display: table;
  &__wrap {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
}
.content-box {
  width: 1080px;
  max-width: 100%;
  margin: 0 auto;
}
.about-body {
  background: #000;
  padding: 100px 0;
  .about__title {
    text-align: left;
    // font-weight: 700;
    // text-transform: uppercase;
    // letter-spacing: 10px;
    color: #fff;
    .h1 {
      font-family: Trade Gothic W1;
      font-size: $h1;
      line-height: $h1_lh;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 10px;
      text-align: center;
    }
    .about__break {
    }
  }
  .about__intro {
    font-family: 'Lato', sans-serif;
    font-size: 12px;
    line-height: 2;
    color: #afafaf;
    letter-spacing: 1px;
    text-align: justify;
    padding: 100px 0 0;
  }
}
@media screen and (max-width: 767px) and (min-width: 0px) {
  .c-about .about-body {
    padding: 50px 0;
  }
  .about__intro {
    padding: 50px 0 0;
  }
  .c-about .content-box {
    width: 100%;
  }
  .c-about .top-box {
    height: 90px;
  }
}
</style>
