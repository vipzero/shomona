import React from "react"
import ReactDOM from "react-dom"
import _map from "lodash/map"
import "normalize.css"
import styled, { createGlobalStyle } from "styled-components"
import { teams, buttles, resultTable } from "./data"

import { FaHandMiddleFinger, FaWalking, FaArchive } from "react-icons/fa"
import TeamAImg from "./img/team-a.jpg"
import TeamBImg from "./img/team-b.jpg"
import TeamCImg from "./img/team-c.jpg"

const Global = createGlobalStyle`
ul {
list-style-type: none;
padding-left: 12px;
}
body {
  background: #1d092f;
  color: white;
  padding: 4px;
}
h3 {
  text-align: center;
}

figure {
  margin: 8px;

}

table {
  border: solid 4px #465d8a;
  border-collapse: collapse;
}
td {
  height: 3em;
  text-align: center;
}

td, th {
  border: solid 4px #465d8a;
}
`

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  h3 {
    margin-top: 40px;
    margin-bottom: 40px;
  }
`
const Header = styled.div`
  background: linear-gradient(#6000a5, #1d092f);
  display: grid;
  text-align: center;
`

const Reiwa = styled.h2`
  color: black;
`
const Title = styled.h1`
  transform: rotate(-5deg);
  font-size: 50px;
  font-family: "Hannari";
`

const Members = styled.div`
  display: grid;
  text-align: center;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr 1fr;
`

const Team = styled.div`
  background: linear-gradient(#380067, #1d092f);
  display: grid;
  border: solid 4px #465d8a;
  border-bottom-width: 1px;
  color: white;
  margin: 4px;
  h4 {
    text-align: center;
    background: #1d092f;
    width: 40px;
    height: 40px;
    margin: 0 auto;
    position: relative;
    top: -20px;
    border: solid 4px #6c93b7;
    color: #76eaf6;
    border-radius: 50%;
    display: table-cell;
    vertical-align: middle;
    line-height: 40px;
  }
  h5 {
    margin: 0;
  }
  li {
    text-align: left;
  }
`

const Name = styled.span`
  margin-left: 4px;
`
const NameIndex = styled.span`
  color: #76eaf6;
`

const Buttle = styled.div`
  margin: 0 auto;
  margin-top: 8px;
  padding: 8px;
  max-width: 600px;
  border: solid 1px white;
  h5 {
    text-align: center;
  }
  p {
    margin: 4px;
  }
`

const TeamID = styled.div`
  color: #76eaf6;
  font-size: 30px;
  font-weight: 100;
`

const ResultList = styled.div``
const Img = styled.img`
  width: 100%;
`

const Prise = styled.div`
  text-align: center;
  background: orange;
  margin: 12px;
  font-size: 40px;
  text-shadow: 1px 2px 3px #808080;
  border-radius: 50px 50px 0 0;
  padding: 8px;
  > p:first-child {
    font-weight: light;
  }
  > p:last-child {
    font-size: 0.5em;
    font-weight: bold;
  }
`

function resultText(team1, team2) {
  if (team1 === team2) {
    return "-"
  }
  return `${resultTable[team1][team2]} - ${resultTable[team2][team1]}`
}

function App() {
  return (
    <div>
      <Global />

      <Header>
        <Reiwa>令和</Reiwa>
        <Title>しょうもな杯</Title>
        <h3>さあ、次世代の「しょうもない」を探しにいこう</h3>
        <h4>2019年5月5日 21時〜</h4>
      </Header>
      <Content>
        <h3>ルール概要</h3>
        <div style={{ padding: "8px", background: "#111" }}>
          <p>
            <FaHandMiddleFinger color="gold" />
            使用禁止はハイプレ・ジェッパ・アーマー
            <br />
            その他縛りはなし
          </p>
          <p>
            <br />
            <FaHandMiddleFinger color="gold" />
            ペアやチーム結成時に個人番号を振る
            <br />
            <br />
            ex) Aチーム
            <br />
            1.ガイジ 2.てんす^q^ 3.お前 4.山岡
            <br />
            この個人番号を元に試合前に抽選をしてその結果によって各種縛りを背負って戦うことになる
            <br />
            <br />
            例えば
            <br />
            どこ:ショッツル鉱山
            <br />
            誰:Aチームの3番とBチームの2番
            <br />
            何を:爆減以外使用禁止
            <br />
            って具合に抽選されたら該当者は爆風軽減・改以外のギアパワーをメインサブ含めて使用禁止の状態で試合を進める
            <br />
            要するに「どこで誰が何をゲーム」を毎試合やる感じ
            <br />
          </p>
          <FaWalking color="gold" /> 進行手順
          <ol>
            <li>部屋は必ず運営が立てる</li>
            <li>
              両チームのメンバーが揃ったら抽選をする(どこで, 誰が, 何を
              の各項目ごとに1～21の乱数を3個生成する)
            </li>
            <li>抽選が確定したらチーム分けやステージ決定をする</li>
            <li>
              試合は3本先取(ヤグラ→アサリ→エリア→ホコ→ナワバリ)で行い、各試合が終わるごとに再抽選する
            </li>
            <li>
              負けたチームのリーダーは結果を報告し、次に試合がないチームは退出する
            </li>
            <li>備考:観戦は自由だが配信環境あるやつ優先</li>
          </ol>
        </div>
        <h3>チーム一覧</h3>
        <Members>
          {_map(teams, (team, id) => (
            <Team key={id}>
              <h4>{team.id}</h4>
              <h5>{team.name}</h5>
              <ul>
                {_map(team.members, (name, i) => (
                  <li key={i}>
                    <NameIndex>{i}</NameIndex>
                    <Name>{name}</Name>
                  </li>
                ))}
              </ul>
            </Team>
          ))}
        </Members>
        <p style={{ textAlign: "right" }}>当日変更: よつぎ→maxi</p>
        <h3>リザルト一覧</h3>
        <ResultList>
          {buttles.map((match, i) => (
            <>
              <hr />
              {match.map((buttle, i) => (
                <Buttle key={i}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      textAlign: "center",
                    }}
                  >
                    <div style={{ width: "4em" }}>
                      <div
                        style={{
                          fontWeight: "900",
                          color: buttle.team1.win ? "orange" : "blue",
                        }}
                      >
                        {buttle.team1.win ? "win!" : "lose"}
                      </div>
                      <TeamID>{buttle.team1.id}</TeamID>
                      <TeamID>{teams[buttle.team1.id].shortname}</TeamID>
                    </div>
                    <div style={{ lineHeight: "40px" }}>vs</div>
                    <div style={{ width: "4em" }}>
                      <div
                        style={{
                          fontWeight: "900",
                          color: buttle.team2.win ? "orange" : "blue",
                        }}
                      >
                        {buttle.team2.win ? "win!" : "lose"}
                      </div>
                      <TeamID>{buttle.team2.id}</TeamID>
                      <TeamID>{teams[buttle.team2.id].shortname}</TeamID>
                    </div>
                  </div>
                  <p>ルール: {buttle.rules.rule}</p>
                  <p>どこで: {buttle.rules.where}</p>
                  <p>誰が: {buttle.rules.who}</p>
                  <p>何を: {buttle.rules.what}</p>
                </Buttle>
              ))}
            </>
          ))}
        </ResultList>
        <h3>結果テーブル</h3>
        <table style={{ width: "100%", margin: "0 auto" }}>
          <tbody>
            <tr>
              <th>→</th>
              <th>A</th>
              <th>B</th>
              <th>C</th>
            </tr>
            {["A", "B", "C"].map(team1 => (
              <tr>
                <th>{team1}</th>
                {["A", "B", "C"].map(team2 => (
                  <td
                    style={
                      resultTable[team1][team2] === 3
                        ? { background: "orange" }
                        : {}
                    }
                  >
                    {resultText(team1, team2)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <h3>ベストしょうもな賞</h3>
        <Prise>
          <p>{"やまおか"}</p>
          <p>{"企画者"}</p>
        </Prise>
        <h3>ベストガイジ賞</h3>
        <Prise>
          <p>{"ふみん"}</p>
          <p>
            ドラクエやってないぞ
            <br />
            お花摘みに行ってるだけだから！
          </p>
        </Prise>
        <h3>優勝チーム</h3>
        <div
          style={{
            textAlign: "center",
            background: "gold",
            margin: "12px",
            fontSize: "40px",
            textShadow: "1px 2px 3px #808080",
            padding: "8px",
          }}
        >
          <p>{teams.C.id}</p>
          <p>{teams.C.name}</p>
        </div>
        <div style={{ color: "white", textAlign: "right", margin: "4px 8px" }}>
          made by vip0
        </div>
        <h3>イラスト(by lemon)</h3>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          <figure style={{ textAlign: "center" }}>
            <Img src={TeamAImg} style={{ width: "100%" }} />
            <figcaption>{teams.A.name}</figcaption>
          </figure>
          <figure style={{ textAlign: "center" }}>
            <Img src={TeamBImg} style={{ width: "100%" }} />
            <figcaption>{teams.B.name}</figcaption>
          </figure>
        </div>
        <figure style={{ textAlign: "center" }}>
          <Img src={TeamCImg} style={{ width: "100%" }} />
          <figcaption>{teams.C.name}</figcaption>
        </figure>

        <h3>配信・スレ情報</h3>
        <ul>
          <Link
            name="Twitch配信 by むめい"
            url="https://www.twitch.tv/videos/420729710"
          />
          <Link
            name="本スレ"
            url="http://hebi.5ch.net/test/read.cgi/news4vip/1557032715"
          />
          <Link
            name="ログ速"
            url="https://www.logsoku.com/r/2ch.sc/news4vip/1557032715/"
          />
          <Link name="ポスター" url="https://i.imgur.com/G2lHhmY.jpg" />
          <Link name="コード" url="https://github.com/vipzero/shomona" />
        </ul>
      </Content>
    </div>
  )
}

function Link({ url, name }) {
  return (
    <li>
      <FaArchive
        style={{ margin: "3px", verticalAlign: "middle" }}
        color="orange"
      />
      <a
        className="fa-layers-text"
        style={{ color: "#e4ba6d", textDecoration: "none" }}
        href={url}
      >
        {name}
      </a>
    </li>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
