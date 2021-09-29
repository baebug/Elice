# import cal
# from urllib.request import urlopen

# array, tuple, dictionary
# pop, count, split, join ...

# func, method
# for x in "string": --> string 또한 sequence data

# module, package

# class, instance

class Human:
    # fields
    name = ""
    age = 0
    def die(self):
        # self: 메서드라면 가져야하는 첫번째 매개변수
        print("응애")

# create instance
bong = Human()
bong.name = "bongkwon"
bong.age = 30
bong.die()

# class의 상속과 객체
class Human:
    name = ""
    gender = ""
    age = 0
    attr = ""
    def talk(self):
        print(self.name, "입니다.", "안녕하세요?")

class misae(Human):
    gender = "male"
    age = 29
    attr = "ㅂㅅ"
    def talk(self):
        print("I'm", self.name, "ㅎㅇ")

diana = Human()
diana.name = "다이애나"
diana.gender = "female"
diana.age = 28
diana.attr = "정상인"

print(diana.gender)
print(diana.age)
print(diana.attr)
diana.talk()

mojjang = misae()
mojjang.name = "멋짱"
print(mojjang.gender)
print(mojjang.age)
print(mojjang.attr)
mojjang.talk()