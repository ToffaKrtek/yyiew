import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { gs, colors } from "../../../styles";
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from "accordion-collapse-react-native";

const product = {
  name: "Тоф Бейфонг ",
  price: "100₽",
  size: "1.56 см",
  short:
    "Единственный ребёнок в семье Лао и Поппи Бейфонг. Её родители - одни из богатейших людей в царстве Земли. Тоф родилась слепой и с самого детства была окружена постоянной заботой и вниманием.",
  long:
    "Тоф родилась в 88 году ПГ. Считая, что слепота делает их дочь слабой и неспособной позаботиться о себе, её родители ни на шаг не отпускали ребёнка от себя. Это привело к тому, что в шесть лет Тоф в слезах сбежала из дома в пещеру, которая оказалась заселена кротобарсуками. По её собственным словам, они были слепые также, как она сама, поэтому они сразу поняли друга друга. Тоф научилась у кротобарсуков магии земли, повторяя их движения. Эти навыки помогли девочке обрести 'зрение' - теперь она чувствовала людей и остальные предметы через излучаемые ими вибрации земли.",
};

export default function About() {
  return (
    <View style={[gs.sectionContainer, styles.container]}>
      <Text style={gs.title}>{product.name}</Text>
      <Text style={styles.info}>
        {product.price} &#8226; {product.size}
      </Text>
      <View style={gs.divider} />
      <Text style={gs.sectionTitle}>О {product.name}:</Text>
      <Text style={styles.about}>{product.short}</Text>
      <Collapse>
        <CollapseHeader>
          <View>
            <Text style={[gs.sectionTitle, styles.accordionTitle]}>
              Читать далее...
            </Text>
          </View>
        </CollapseHeader>
        <CollapseBody>
          <Text style={[styles.about, styles.accordionBody]}>
            {product.long}
          </Text>
        </CollapseBody>
      </Collapse>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkBg,
  },
  info: {
    color: colors.textSec,
    fontWeight: "600",
    marginTop: 4,
  },
  about: {
    fontSize: 13,
    fontWeight: "600",
    color: colors.textSec,
    marginTop: 6,
    lineHeight: 20,
  },
  accordionTitle: {
    paddingTop: 9,
    paddingLeft: 12,
    borderRightWidth: 3,
    borderColor: "#444",
  },
  accordionBody: {
    paddingTop: 4,
    paddingLeft: 7,
    borderRightWidth: 1,
    borderColor: "#444",
  },
});
