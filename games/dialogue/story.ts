import { DialogueBuilder } from "./DialogueBuilder";

export const story = new DialogueBuilder()

  .root(
    "start",
    "You hear a knock on the door in the middle of the night. When you look outside, you see the Death standing and waiting. You...",
  )
  .answer("Open the door", "HouseWarming")
  .answer("Ignore it", "BlissEnding")
  .answer("Sneak out alone", "WifeSeesYou")
  .answer("Sneak out with your wife", "HutInTheWoods")
  .end()

  .ending("BlissEnding", "IGNORANCE IS BLISS")

  .question(
    "HouseWarming",
    "The Death is happy to see you and it brings you some house warming gifts. You...",
  )
  .answer("Invite it in for a drink", "oldTimes")
  .answer("Close the door on him", "BadFriendEnding")
  .answer("Go out for a drink", "BarWithDeath")
  .end()

  .ending("BadFriendEnding", "BAD FRIEND")

  .question(
    "oldTimes",
    "You and the Death sit and drink some wine while remembering good old times. But to be more precise, what were the good old times?",
  )
  .answer("You and the Death used to play soccer together", "soccerBuddies")
  .answer("You two used to be lovers", "exLovers")
  .end()

  .question(
    "exLovers",
    "While talking about the past, your wife walks in. Seeing the Death, she gets angry and throws it out of your house",
  )
  .answer("...", "exLoversEnding")
  .end()
  .ending("exLoversEnding", "NO MORE DEATH")

  .question(
    "soccerBuddies",
    "While talking about soccer games you and the Death played, it mentions that you were terrible at soccer. You...",
  )
  .answer("Agree", "badAtSoccer")
  .answer("Disagree", "goodAtSoccer")
  .end()

  .question(
    "goodAtSoccer",
    "You and the Death have an argument, it gets angry, very angry; and kills you in one quick motion.",
  )
  .answer("...", "goodAtSoccerEnding")
  .end()
  .ending("goodAtSoccerEnding", "ANGER ISSUES")

  .question(
    "badAtSoccer",
    "The house suddenly catches fire out of nowhere (You left the oven on), do you...",
  )
  .answer("Try to save your wife sleeping in the next room", "saveWife")
  .answer("Try to save the Death standing in front of you", "saveDeath")
  .end()

  .question(
    "saveWife",
    "You and your wife make out alive, but, sadly, the death dies. Upon hearing this news, the God makes you the new Death.",
  )
  .answer("...", "saveWifeEnding")
  .end()
  .ending("saveWifeEnding", "FOREVER GUILT")

  .question(
    "saveDeath",
    "You and the Death escape, but your wife makes it too and she sees that you didn't even try to save her",
  )
  .answer("...", "saveDeathEnding")
  .end()
  .ending("saveDeathEnding", "DIVORCE")

  .question(
    "BarWithDeath",
    "You and the Death are at a bar chilling. After a couple of drinks a random girl approaches the Death and starts flirting. You...",
  )
  .answer("Get jealous", "Ashamed")
  .answer("Be a good wingman", "DeathHasADate")
  .end()

  .question(
    "Ashamed",
    "You, a drunk jealous man, throw a tantrum in the middle of the bar. Upon noticing, the bar's security throws you out in the street.",
  )
  .answer("...", "AshamedEnding")
  .end()
  .ending("AshamedEnding", "ASHAMED")

  .question(
    "DeathHasADate",
    "The Death and the girl leave the bar together to a nearby hotel. Left alone, you...",
  )
  .answer("Go Home", "GoodFriendEnding")
  .answer("Continue the night, trying to flirt as well", "FlirtyNight")
  .end()

  .ending("GoodFriendEnding", "GOOD FRIEND")

  .question(
    "FlirtyNight",
    "While drinking and dancing seductively, an attractive (10/10) girl approaches you, flirting. You flirt back and...",
  )
  .answer("Do not continue, then go home", "GoodHusband")
  .answer("Continue flirting and go to her place", "BadHusband")
  .end()

  .question(
    "GoodHusband",
    "You get back to your home, your room and lay next to your already asleep wife. You hug her from behind and caress her cheek. You fall asleep looking at a photo of your wedding on your nightstand.",
  )
  .answer("...", "GoodHusbandEnding")
  .end()
  .ending("GoodHusbandEnding", "GOOD HUSBAND")

  .question(
    "BadHusband",
    "You go up to her place, she locks the door behind you. When you turn around you see the Devil. He says you are a sinner and immediatelly takes you straight to hell.",
  )
  .answer("...", "BadHusbandEnding")
  .end()
  .ending("BadHusbandEnding", "PUNISHED")

  .question(
    "WifeSeesYou",
    "Your wife sees you sneaking out from your bedroom's window. You...",
  )
  .answer("Make up an excuse", "LiarLiar")
  .answer("Confess your sins", "Sniped")
  .end()

  .question(
    "LiarLiar",
    "As soon as you're finished explaining how you needed to pee outside, you are struck by a bolt of lightning sent by Zeus. You burst into flames and die instantly.",
  )
  .answer("...", "LiarLiarEnding")
  .end()
  .ending("LiarLiarEnding", "LIAR LIAR")

  .question(
    "Sniped",
    "When your wife hears that you sneaked out and left her alone to deal with the Death, she jumps out of the window, does a 360 and shoots you with a sniper riffle, blowing your brains out",
  )
  .answer("damn...", "SnipedEnding")
  .end()
  .ending("SnipedEnding", "360 NO SCOPED")

  .question(
    "HutInTheWoods",
    "You and your wife sneak out together, but get lost in the woods. You find a hut and decide to...",
  )
  .answer("Go inside", "HutInTheWoodsInside")
  .answer("Keep walking", "LostInTheWoods")
  .end()

  .question(
    "LostInTheWoods",
    "You and your wife walk a bit more, but get even more lost. The night is freezing cold and you end up dying of hypothermia in the middle of the woods. The next day, the Death finds your frozen bodies and takes you to the afterlife together.",
  )
  .answer("...", "LostInTheWoodsEnding")
  .end()
  .ending("LostInTheWoodsEnding", "YOU'RE NOT ELSA")

  .question(
    "HutInTheWoodsInside",
    "You and your wife enter the hut and look around. There is a fireplace, some wood and on the table there is an old, dusty, mysteriuous book. You decide to...",
  )
  .answer("Read the book", "ReadTheBook")
  .answer("Ignore the book and try to start a fire", "StartFire")
  .end()

  .question(
    "ReadTheBook",
    "You open the book and strart reading. The magical book suddenly grants you infinite knowledge. But, such power comes with a price - your brain, due to infinite information and infinite mass, turns into a black hole.",
  )
  .answer("...", "ReadTheBookEnding")
  .end()
  .ending("ReadTheBookEnding", "END OF HUMANITY")

  .question(
    "StartFire",
    "You try to start a fire, but you don't know how to do it. You end up burning the whole hut down with you and your wife inside. The Death finds your charred bodies and takes you to the afterlife together.",
  )
  .answer("...", "StartFireEnding")
  .end()
  .ending("StartFireEnding", "DONT PLAY WITH FIRE")

  .build();
