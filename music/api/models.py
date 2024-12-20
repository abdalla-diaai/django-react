from django.db import models
import random, string

def generate_unique_code():
    length = 6
    characters = string.ascii_uppercase + string.digits

    while True:
        code = "".join(random.choices(characters, k=length))
        if Room.objects.filter(code=code).count() == 0:
            break
    return code

# Create your models here.
class Room(models.Model):
    code = models.CharField(max_length=50, default=generate_unique_code, unique=True)
    host = models.CharField(max_length=50, unique=True) 
    guest_can_pause = models.BooleanField(null=False, default=False)
    votes_to_skip = models.IntegerField(null=False, default=1)
    created_at = models.DateTimeField(auto_now_add=True)


